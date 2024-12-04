# Interactive Speech Therapy Web Application

A virtual server web application designed to provide personalized speech therapy for patients, particularly those with Parkinson's Disease. The app includes tools for both Speech-Language Pathologists (SLPs) and patients, offering exercises that focus on volume, clarity, and intent in speaking.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Design Details](#design-details)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Many individuals, especially children and adults with speech disorders, face challenges in effectively communicating, which can lead to frustration, low confidence, and difficulty in daily interaction. Access to traditional speech therapy can be limited due to cost, time, and location, hindering consistent progress. Additionally, therapy exercises can feel repetitive and disengaging, reducing motivation for improvement. Interactive Speech Therapy will provide a service to assist clients who struggle with dysarthric speech patterns. Our solution will utilize modern machine learning techniques to provide a therapy session that is interactive by having the patient speak with a chatbot in a natural conversation. 

## Features

- Dual Web Apps: Separate, tailored interfaces for SLPs and patients.
- User Account System: Allows secure registration, login, and role-based access for SLPs and patients.
- Speech Exercises: Provides structured exercises that focus on improving volume, clarity, and intentional speaking.
- AI Chatbot Speech Exercise: Engages patients in interactive exercises with an AI chatbot, offering prompts and feedback.
- Real-Time Feedback: Visual volume bar and prompts help patients practice speaking with intent.
- User Progress Tracking: Records and displays progress over time to both patients and SLPs.
- User Dashboard: Patients can view their exercise history, track progress, and access new exercises.
- Speech Pathologist Dashboard: SLPs can monitor patient progress, manage client data, and customize exercises.
- User/SLP Chat: Allows secure messaging between patients and SLPs for communication and feedback.
- Mobile-Friendly Design: Accessible across desktop and mobile devices for ease of use.

## Design Details

The Interactive Speech Therapy Web Application is a virtual-based, mobile-friendly web application designed to provide customized speech therapy solutions. The design includes multiple components to support an accessible, flexible experience for both patients and speech-language pathologists (SLPs).

### 1. High-Level Architecture
The app follows a client-server architecture, split into three main layers:

- Client-Side Applications: Separate interfaces for SLPs and patients, both built with React for responsive, mobile-friendly design.
- Backend Server: Handles application logic, API calls, authentication, and session management.
- Data Storage Layer: A secure cloud database for storing user data, therapy progress, session logs, and chat messages.

### 2. Client-Side Application (Frontend)
Both the SLP Dashboard and Patient Dashboard are designed with React, providing a responsive, easy-to-navigate UI across PCs, laptops, tablets, and smartphones.

Key Components:
- Patient Dashboard: Displays exercise prompts, feedback, progress tracking, and allows for chatting with the assigned SLP.
- SLP Dashboard: Provides tools for client management, session logs, patient progress tracking, and customization of therapy exercises.
- Chat Interface: A built-in chat application to enable secure communication between patients and SLPs.
Design Decisions:
- Responsiveness: The UI is optimized for mobile use, as well as desktops and laptops, using responsive design techniques in CSS.
- Ease of Navigation: A user-centered design ensures easy access to primary functions, with intuitive dashboards for both SLPs and patients.

### 3. Backend Server
The backend server, hosted on a virtual server, uses Node.js to handle:

- API Gateway: Routes requests from the frontend to appropriate services.
- Authentication & Authorization: Secures user accounts and role-based access control.
- Speech and Feedback Processing: Integrates Whisper API for speech-to-text recognition and OpenAI API for generating personalized feedback.
- Chat System: Manages secure real-time chat between patients and SLPs.

Technology Choices:
- Node.js: Chosen for its asynchronous capabilities, ideal for handling API requests, database operations, and real-time chat without blocking performance.
- Whisper API: Provides robust speech recognition, converting patient speech into text for analysis.
- OpenAI API: Used to generate meaningful feedback and prompts, making therapy sessions more engaging.

### 4. Data Storage Layer
The data storage layer is a cloud-hosted database that securely stores:

- User Data: Account details and role (SLP or Patient).
- Session Data: Logs of exercises, volume and speech metrics, and feedback.
- Therapy Progress: Tracks performance and milestones over time for each patient.
- Chat Data: Stores chat messages securely to ensure communication history is accessible to both patients and SLPs.
  
Database Design:
- Relational vs. NoSQL: Choose based on complexity and scalability needs; relational databases can handle structured data, while NoSQL offers flexibility for chat and session data.
- Data Privacy and Compliance: Ensuring compliance with health data regulations (e.g., HIPAA, if required), with encrypted storage and secure access protocols.

### 5. Data Flow and Interaction
The data flow across the app follows these main steps:

- User Login: Patients and SLPs log in with authenticated access.
- Speech Exercises: Patients complete exercises, and the Whisper API converts speech to text.
- Feedback Generation: The backend sends the text to OpenAI API to generate actionable feedback, displayed on the Patient Dashboard.
- Session Logging: Each session’s data is stored in the database for future reference by the patient and SLP.
- Chat Interaction: Real-time messages between patients and SLPs are handled via the backend, ensuring data security and accessibility.

### 6. Scalability and Performance Considerations
- Virtual Server Hosting: By hosting on a virtual server, we maintain flexibility for scaling up resources as needed.
- Caching: Implement caching for repeated requests, such as session data or user profile information, to optimize performance.
- Load Balancing: Future enhancements could include load balancing if traffic to the server increases.

### 7. Future Enhancements
Potential improvements include:

- Extended API Integration: Additional APIs for sentiment analysis or more complex speech evaluation.
- Machine Learning: Developing custom ML models to analyze progress patterns or optimize feedback.
- Mobile App Version: A dedicated mobile app could improve accessibility further.

System design diagram: 
![System design diagram](https://github.com/user-attachments/assets/e83f781c-6c05-4712-92dc-243e140ba770)
https://lucid.app/lucidchart/f24290ad-e13e-44fc-a357-03c7a45b584e/edit?viewport_loc=-133%2C-62%2C2304%2C1141%2C0_0&invitationId=inv_13337d04-13d0-4e5a-8b09-0dbc7cfb2129

### Example Code:

# Code snippet or example to showcase design principles

Installation
Provide instructions on how to install your project. Include any dependencies or prerequisites.

# Installation steps
$ git clone https://github.com/your-username/your-repo.git
$ cd your-repo
$ npm install  # or any other relevant command

Configuration
Explain how users can configure your project. If applicable, include details about configuration files.

Example Configuration:
# Configuration file example
key: value

Usage
Provide examples and instructions on how users can use your project. Include code snippets or command-line examples.

Example Usage:
# Example command or usage

Contributing
Explain how others can contribute to your project. Include guidelines for pull requests and any code of conduct.

License
Specify the license under which your project is distributed. For example, MIT License, Apache License, etc.


Make sure to replace placeholders such as "Project Name," "your-username," and "your-repo" with the appropriate information for your repository.
