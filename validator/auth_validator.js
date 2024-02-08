const { z } = require("zod")
const registrationSchema = z.object({
    name: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at lest of 3 chars. "})
    .max(20, {message: "Name must not be more than 20 characters"}),
    email: z
    .string({required_error: "Email is required "}) 
    .email({message: "Invalid email address"})
    .min(3, {message: "email must be at lest of 3 chars. "})
    .max(50, {message: "email must not be more than 50 characters"}),
    registrationNo: z
    .string({required_error: "RegistraionN0 is required"})
    .min(12, {message: "RegistraionN0 must be at lest of 14 chars. "})
    .max(20, {message: "RegistraionN0 must not be more than 20 characters"}),
    mobno: z
    .number({message: "Mobile number is require"}),
    team: z
    .number({required_error: "Number of member is required"})
    .max(20, {message: "Number of member must not be more than 20 characters"}),
    field: z
    .string({required_error: "field is required"}),
    title: z
    .string({required_error: "title is required"})
    .min(3, {message: "title must be at lest of 3 chars. "})
    .max(100, {message: "title must not be more than 100 characters"}),
    description: z
    .string({ required_error: "description is required" })
    .min(3, {message: "description must be at lest of 3 chars. "})
    .max(600, {message: "description must not be more than 600 characters"}),
    Requirements: z
    .string({ required_error: "Requirements is required" }),
    phase: z
    .string({ required_error: "Requirements is required" }),

});
module.exports = registrationSchema;