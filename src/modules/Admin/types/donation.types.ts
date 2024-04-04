export type DonationDataType = {
  result: Array<DonationType>;
};

export type DonationType = {
  donation_id: string;
  user_id: string;
  charity_id: string;
  donor_name: string;
  donor_message: string;
  donation_amount: string;
  donation_date: string;
};
