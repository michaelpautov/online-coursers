require('dotenv').config()
const bcrypt = require("bcrypt")
const { db } = require("@vercel/postgres")
const { coursers } = require("./coursers")
const { users } = require("./users")



async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `

    console.log(`Created "users" table`)

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
      })
    )

    console.log(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      users: insertedUsers,
    }
  } catch (error) {
    console.error("Error seeding users:", error)
    throw error
  }
}

async function seedCoursers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS coursers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        description TEXT,
        author VARCHAR(255),
        rating DECIMAL(2, 1) CHECK (rating BETWEEN 1 AND 5),
        reviews INT CHECK (reviews BETWEEN 1 AND 100000),
        duration TIME CHECK (duration >= '00:00:00' AND duration <= '20:00:00'),
        lectures_counter INT,
        difficulty_level INT,
        is_best_seller BOOLEAN,
        languages VARCHAR(255),
        comments JSON,
        price DECIMAL(8, 2)
      );
    `

    console.log(`Created "coursers" table`)

    // Insert data into the "coursers" table
    const insertedCoursers = await Promise.all(
      coursers.map(
        (course) => client.sql`
          INSERT INTO coursers (
              name, description, author, rating, reviews, duration, lectures_counter, difficulty_level,
              is_best_seller, languages, comments, price
          )
          VALUES (
            ${course.name}, ${course.description}, ${course.author}, ${course.rating},
            ${course.reviews}, ${course.duration}, ${course.lectures_counter},
            ${course.difficulty_level}, ${course.is_best_seller}, ${course.languages},
            ${JSON.stringify(course.comments)}, ${course.price}
          )
          ON CONFLICT (id) DO NOTHING;
        `
      )
    )

    console.log(`Seeded ${insertedCoursers.length} coursers`)

    return {
      createTable,
      coursers: insertedCoursers,
    }
  } catch (error) {
    console.error("Error seeding coursers:", error)
    throw error
  }
}

async function main() {
  console.log({
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
  });
  const client = await db.connect()

  await seedUsers(client)
  await seedCoursers(client)

  await client.end()
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err)
})

/*
	•	Home Page:
	•	View the list of available courses.
	•	Each course should display essential characteristics (name, description, duration, difficulty level, etc.).
	•	Ability to filter courses by various parameters (e.g., difficulty level, language, duration, etc.).
	•	Ability to register and log in to the system for access to additional features.
	•	Course Details Page:
	•	Display complete information about the selected course (name, description, duration, difficulty level, instructors, etc.).
	•	Ability to leave comments on the course. Comment functionality is available only to registered users.


	comment:

	login
	comment

	coursers_list:

	name: string
	description: string
	author: string
	rating: number
	reviews: number
	duration: number
  lectures_counter: number
	difficulty_level: number
	is_best_seller: boolean

  course

  name: string
	description: string
	author: string
	rating: number
	reviews: number
	duration: number
  lectures_counter: number
	difficulty_level: number
	is_best_seller: boolean

	languages: number
	comments: number[]
	price: number



  User:
  login
  password


 */
