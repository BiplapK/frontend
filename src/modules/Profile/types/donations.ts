export type DonationResponseType = Array<DonationType>;

export type DonationType = {
  donation_id: string;
  user_id: string;
  charity_id: string;
  donor_name: string;
  donor_message: string | null;
  donation_ammount: string;
  donation_date: string;
  charity_title: string;
};
