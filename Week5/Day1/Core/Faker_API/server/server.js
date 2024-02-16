//dependency imports
import express from "express";
import {faker} from "@faker-js/faker";

//variables
const app = express();
const port = 8000;

const createUser = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    },
});

//////////////////////////////////
// Create an api route "/api/users/new" that returns a new user
app.get( "/api/users/new", (req, res) => {
    const newUser =  createUser();
    res.json({newUser});
})

// Create an api route "/api/companies/new" that returns a new company
app.get( "/api/companies/new", (req, res) => {
    const newCompany =  createCompany();
    res.json({newCompany});
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("api/user/company", (req, res) =>{
    const newUser = createUser();
    // const companyId = req.query.company_id;
    const newCompany = createCompany();
    const responseObject = {
        user: newUser,
        company: newCompany
    }
    res.json(responseObject);
});

//listening port in the console log
app.listen(port, () => console.log(`express server running on port  ${port}`));