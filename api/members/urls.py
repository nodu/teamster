from django.urls import path
from .views import TeamMemberListCreateView, TeamMemberDetailView

urlpatterns = [
    path("members", TeamMemberListCreateView.as_view(), name="api_team_members_list"),
    path(
        "members/<int:pk>",
        TeamMemberDetailView.as_view(),
        name="api_team_member_detail",
    ),
]
