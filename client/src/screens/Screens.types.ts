export type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    phone_number: string;
    gender: string;
    birthdate: string;
};

export type SignInParameters = {
  username: string;
  password: string;
};

export type GenderStore = {
  [key: number]: string;
};
  