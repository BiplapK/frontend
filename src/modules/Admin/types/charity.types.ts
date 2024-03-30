export type CharityDataType = {
  result: Array<CharityType>;
};

export type CharityType = {
  charity_id: string;
  title: string;
  description: string;
  image_url: string;
  donation_count: string | null;
  charity_amount: string;
  collected_amount: string | null;
};
