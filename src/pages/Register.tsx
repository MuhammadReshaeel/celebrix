import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Calendar, UserCircle } from 'lucide-react';
import { useAuth } from '../store/authStore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SocialLoginButtons from '../components/SocialLoginButtons';

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  agreedToTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions')
});

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    try {
      console.log('Registration form data:', values);
      await register(values.email, values.password, {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth,
      });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Create Your Account
          </h2>
          <p className="mt-2 text-gray-400">
            Join our community and connect with your favorite creators
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
          <SocialLoginButtons mode="register" />

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              username: '',
              email: '',
              gender: '',
              dateOfBirth: '',
              password: '',
              confirmPassword: '',
              agreedToTerms: false
            }}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserCircle className="h-5 w-5 text-gray-400" />
                      </div>
                      <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter first name"
                      />
                    </div>
                    {errors.firstName && touched.firstName && (
                      <div className="mt-1 text-sm text-red-500">{errors.firstName}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserCircle className="h-5 w-5 text-gray-400" />
                      </div>
                      <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter last name"
                      />
                    </div>
                    {errors.lastName && touched.lastName && (
                      <div className="mt-1 text-sm text-red-500">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Field
                        id="username"
                        name="username"
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Choose a username"
                      />
                    </div>
                    {errors.username && touched.username && (
                      <div className="mt-1 text-sm text-red-500">{errors.username}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && touched.email && (
                      <div className="mt-1 text-sm text-red-500">{errors.email}</div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-2">
                      Gender
                    </label>
                    <Field
                      as="select"
                      id="gender"
                      name="gender"
                      className="block w-full pl-3 pr-10 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </Field>
                    {errors.gender && touched.gender && (
                      <div className="mt-1 text-sm text-red-500">{errors.gender}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-300 mb-2">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <Field
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    {errors.dateOfBirth && touched.dateOfBirth && (
                      <div className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Create a password"
                      />
                    </div>
                    {errors.password && touched.password && (
                      <div className="mt-1 text-sm text-red-500">{errors.password}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Confirm your password"
                      />
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="mt-1 text-sm text-red-500">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <Field
                    id="agreedToTerms"
                    name="agreedToTerms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 bg-gray-700"
                  />
                  <label htmlFor="agreedToTerms" className="ml-2 block text-sm text-gray-300">
                    I agree to the{' '}
                    <Link to="/terms" className="text-emerald-400 hover:text-emerald-300">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
                {errors.agreedToTerms && touched.agreedToTerms && (
                  <div className="text-sm text-red-500">{errors.agreedToTerms}</div>
                )}

                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  Create Account
                </button>

                <div className="text-center">
                  <span className="text-gray-400">Already have an account?</span>
                  {' '}
                  <Link
                    to="/login"
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;