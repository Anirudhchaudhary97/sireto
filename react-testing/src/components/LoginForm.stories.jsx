import { userEvent, within, expect } from '@storybook/test';
import LoginForm from './LoginForm';


export default {
  component: LoginForm,
};

export const EmptyForm = {};
export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('userName'), 'anirudh');

    await userEvent.type(canvas.getByTestId('password'), 'anirudh123');

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!'
      )
    ).toBeInTheDocument();
  },
};