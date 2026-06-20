
# CodSoft_StudentGradeCalculator

## Description
This project was developed as part of the CodSoft Java Programming Internship. It is a Spring Boot web application that calculates student grades based on marks entered for multiple subjects.

## Features
- Enter marks for multiple subjects
- Calculate total marks
- Calculate average percentage
- Assign grades automatically
- Store records in MariaDB
- Responsive user interface

## Technologies Used
- Java
- Spring Boot
- MariaDB
- HTML5
- CSS3
- JavaScript
- Maven
- Git & GitHub

## Project Structure

```text
CodSoft_StudentGradeCalculator/
│
├── .gitignore
├── README.md
├── HELP.md
├── mvnw
├── mvnw.cmd
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── codsoft
│   │   │           └── gradecalculator
│   │   │               ├── GradecalculatorApplication.java
│   │   │               ├── controller
│   │   │               ├── entity
│   │   │               └── repository
│   │   └── resources
│   │       ├── application.properties
│   │       ├── static
│   │       │   ├── index.html
│   │       │   ├── script.js
│   │       │   └── style.css
│   │       └── templates
│   └── test
│       └── java
│           └── com
│               └── codsoft
│                   └── gradecalculator
│                       └── GradecalculatorApplicationTests.java
└── target
    ├── classes
    │   ├── application.properties
    │   ├── com
    │   │   └── codsoft
    │   │       └── gradecalculator
    │   │           └── GradecalculatorApplication.class
    │   └── static
    │       ├── index.html
    │       ├── script.js
    │       └── style.css
    ├── generated-sources
    │   └── annotations
    ├── generated-test-sources
    │   └── test-annotations
    ├── gradecalculator-0.0.1-SNAPSHOT.jar
    ├── gradecalculator-0.0.1-SNAPSHOT.jar.original
    ├── maven-archiver
    │   └── pom.properties
    ├── maven-status
    │   └── maven-compiler-plugin
    │       ├── compile
    │       │   └── default-compile
    │       │       ├── createdFiles.lst
    │       │       └── inputFiles.lst
    │       └── testCompile
    │           └── default-testCompile
    │               ├── createdFiles.lst
    │               └── inputFiles.lst
    └── test-classes
        └── com
            └── codsoft
                └── gradecalculator
                    └── GradecalculatorApplicationTests.class

39 directories, 23 files

```

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/CodSoft_StudentGradeCalculator.git
```

2. Configure MariaDB in `application.properties`

3. Run the project

```bash
./mvnw spring-boot:run
```

4. Open in browser

```text
http://localhost:8080
```

## Output

* Total Marks
* Average Percentage
* Grade

## Disclaimer

This project is created for educational and internship purposes only.

