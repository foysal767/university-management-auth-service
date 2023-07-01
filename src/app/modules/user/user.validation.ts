import { z } from 'zod';
import { bloodGroup, gender } from '../student/student.const';

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required!',
        }),
        middleName: z
          .string({
            required_error: 'Middle name is required!',
          })
          .optional(),
        lastName: z.string({
          required_error: 'Last name is required!',
        }),
      }),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required!',
      }),
      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'Gender is required!',
      }),
      bloodGroup: z
        .enum([...bloodGroup] as [string, ...string[]], {
          required_error: 'Blood group is required!',
        })
        .optional(),
      email: z
        .string({
          required_error: 'Email is required!',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact No is required!',
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact No is required!',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent Address Contact No is required!',
      }),
      presentAddress: z.string({
        required_error: 'Present Address Contact No is required!',
      }),
      academicSemester: z.string({
        required_error: 'Academic Semester is required!',
      }),
      academicDepartment: z.string({
        required_error: 'Academic Department is required!',
      }),
      academicFaculty: z.string({
        required_error: 'Academic Faculty is required!',
      }),
      guardian: z.object({
        fatherName: z.string({
          required_error: 'Father name is required!',
        }),
        fatherOccupation: z.string({
          required_error: 'Father Occupation is required!',
        }),
        fatherContactNo: z.string({
          required_error: 'Father Contact No is required!',
        }),
        motherName: z.string({
          required_error: 'mother name is required!',
        }),
        motherOccupation: z.string({
          required_error: 'mother Occupation is required!',
        }),
        motherContactNo: z.string({
          required_error: 'mother Contact No is required!',
        }),
        address: z.string({
          required_error: 'Guardian address is required!',
        }),
      }),
      localGuardian: z.object({
        name: z.string({
          required_error: 'ELocal guardian name is required!',
        }),
        occupation: z.string({
          required_error: 'Local guardian occupation is required!',
        }),
        contactNo: z.string({
          required_error: 'Local guardian contact no is required!',
        }),
        address: z.string({
          required_error: 'Local guardian address is required!',
        }),
      }),
      profileImage: z.string().optional(),
    }),
  }),
});
export const UserValidation = {
  createUserZodSchema,
};

//req-validation
//body --> object
//data --> object
