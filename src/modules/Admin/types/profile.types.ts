export type ProfileDataType = {
  role: string;
  email: string;
  id: string;
  username: string;
} | null;

export type ContactDataType = {
  result: Array<ContactType>;
};

export type ContactType = {
  inquiry_id: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};
