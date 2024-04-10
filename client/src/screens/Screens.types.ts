export type SignUpParameters = {
    username: string;
    password: string;
    email: string;
    phone_number: string;
    gender: string;
    birthdate: string;
};

export type SignInParameters = {
  email: string;
  password: string;
};

export type GenderStore = {
  [key: number]: string;
};

export type EmailVerification = {
  verification_number_1: string;
  verification_number_2: string;
  verification_number_3: string;
  verification_number_4: string;
  verification_number_5: string;
  verification_number_6: string;
}

export type GeoLocation = {
      latitude: null;
      longitude: null;
}

export type BusinessParameters = {
  name: string;
  address: string;
  email: string;
  phone: string;
  type: string;
  firstName: string;
  lastName: string
}