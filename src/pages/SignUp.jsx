import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Disable the submit button

    // Log form values to console (can replace this with a backend call)
    console.log(formData);

    try {
      // Replace the URL with your backend API
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User signed up successfully!");
        // Optionally handle success, like resetting form or redirecting user
      } else {
        console.error("Failed to sign up:", response.statusText);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setIsSubmitting(false); // Re-enable the submit button after submission
    }
  };

  return (
    <form
      className="space-y-6 max-w-md mx-auto bg-white p-6 shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1>Sign Up</h1>

      {/* Name Field */}
      <div>
        <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Name
        </Label>
        <Input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      {/* Role Field */}
      <div>
        <Label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Role
        </Label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="" disabled>
            Select role
          </option>
          <option value="admin">Admin</option>
          <option value="resident">Resident</option>
          <option value="customer-support">Customer Support</option>
        </select>
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      {/* Password Field */}
      <div>
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          className="px-4 mx-auto py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
