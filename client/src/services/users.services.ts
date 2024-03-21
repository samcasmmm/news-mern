import { AxiosWithAuth, AxiosWithoutAuth } from '@/services/Axios';
import { SIGN_IN } from './endpoints';
// @GET
// @POST

type SignInProps = {
  email: string;
  password: string;
};
type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

export const handleSignIn = async (body: SignInProps) => {
  return (
    await AxiosWithAuth.post(SIGN_IN, {
      email: body.email,
      password: body.password,
    })
  ).data;
};
export const handleSignUp = async (body: SignUpProps) => {
  return (
    await AxiosWithAuth.post(SIGN_IN, {
      email: body.email,
      password: body.password,
    })
  ).data;
};

export const listOfUsers = async () => {
  return (await AxiosWithoutAuth.get('/users?role=all')).data;
};
// @PUT
// @DELETE
