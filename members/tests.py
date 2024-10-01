from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse
from rest_framework import status
from .models import TeamMember


class TeamMemberModelTests(TestCase):
    def test_create_member(self):
        """Test creating a team member."""
        member = TeamMember.objects.create(
            first_name="John",
            last_name="Doe",
            email="john.doe@example.com",
            phone="1234567890",
            role="regular",
        )
        self.assertEqual(str(member), "John Doe")
        self.assertEqual(member.role, "regular")
        self.assertIsInstance(member, TeamMember)


class TeamMemberAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.team_member_url = reverse("api_team_members_list")

        self.team_member_data = {
            "first_name": "Jane",
            "last_name": "Doe",
            "email": "jane@example.com",
            "phone": "9876543210",
            "role": "admin",
        }

        self.member = TeamMember.objects.create(**self.team_member_data)

    def test_list_members(self):
        """GET all members"""
        response = self.client.get(self.team_member_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]["role"], "admin")
        self.assertEqual(len(response.data), 1)

    def test_create_member(self):
        """POST a new team member"""
        new_member_data = {
            "first_name": "Robo",
            "last_name": "Smith",
            "email": "robbie@example.com",
            "phone": "5554443322",
            "role": "regular",
        }
        response = self.client.post(
            self.team_member_url, new_member_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TeamMember.objects.count(), 2)

    def test_update_member(self):
        """PUT to update an existing member"""
        update_url = reverse("api_team_member_detail", args=[self.member.id])
        updated_data = {
            "first_name": "Jane",
            "last_name": "Smith",
            "email": "jane.doe@example.com",
            "phone": "9876543210",
            "role": "regular",
        }
        response = self.client.put(update_url, updated_data, format="json")
        self.member.refresh_from_db()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.member.role, "regular")

    #
    def test_delete_member(self):
        """DELETE a team member"""
        delete_url = reverse("api_team_member_detail", args=[self.member.id])
        response = self.client.delete(delete_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(TeamMember.objects.count(), 0)
