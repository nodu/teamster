export interface Member {
  id?: number;
  first_name: string;
  last_name: string;
  role: string;
  phone: string;
  email: string;
}

export interface MemberFormProps {
  formData: Member;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  deleteMember?: (e: React.UIEvent) => void;
  err?: string;
}
