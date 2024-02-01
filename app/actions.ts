"use server";

export async function SubmitContactForm(formData: FormData) {
  const name = formData.get("name");
  const role = formData.get("role");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const message = formData.get("message");

  console.log(name);
  console.log(role);
  console.log(email);
  console.log(phoneNumber);
  console.log(message);
}
