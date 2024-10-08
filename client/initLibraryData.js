// shared/initLibraryData.js
/*
const fs = require('fs');
const path = require('path');

// Initial library data
const libraryData = new Map([
    // your initial book data...
    [
        '978-1-491-99421-3',
        {
          ISBN: '978-1-491-99421-3',
          title: 'Designing Data-Intensive Applications',
          author: 'Martin Kleppmann',
          genre: 'Data Engineering',
          year: 2017,
          quantity: 2,
        },
      ],
      [
        '978-0-596-52068-7',
        {
          ISBN: '978-0-596-52068-7',
          title: 'JavaScript: The Good Parts',
          author: 'Douglas Crockford',
          genre: 'Programming',
          year: 2008,
          quantity: 7,
        },
      ],
      [
        '978-3-16-148410-0',
        {
          ISBN: '978-3-16-148410-0',
          title: 'Introduction to Algorithms',
          author: 'Thomas H. Cormen',
          genre: 'Computer Science',
          year: 2009,
          quantity: 5,
        },
      ],
      [
        '978-0-13-110362-7',
        {
          ISBN: '978-0-13-110362-7',
          title: 'The C Programming Language',
          author: 'Brian W. Kernighan',
          genre: 'Programming',
          year: 1988,
          quantity: 3,
        },
      ],
      [
        '978-0-262-03384-8',
        {
          ISBN: '978-0-262-03384-8',
          title: 'Artificial Intelligence: A Modern Approach',
          author: 'Stuart Russell',
          genre: 'AI',
          year: 2010,
          quantity: 4,
        },
      ],
      [
        '978-0-07-042807-2',
        {
          ISBN: '978-0-07-042807-2',
          title: 'Operating System Concepts',
          author: 'Abraham Silberschatz',
          genre: 'Operating Systems',
          year: 2008,
          quantity: 6,
        },
      ],
      [
        '978-0-321-63536-7',
        {
          ISBN: '978-0-321-63536-7',
          title: 'Clean Code',
          author: 'Robert C. Martin',
          genre: 'Programming',
          year: 2008,
          quantity: 10,
        },
      ],
      [
        '978-1-491-94716-4',
        {
          ISBN: '978-1-491-94716-4',
          title: 'Learning React',
          author: 'Alex Banks',
          genre: 'Web Development',
          year: 2017,
          quantity: 8,
        },
      ],
      [
        '978-0-201-83595-3',
        {
          ISBN: '978-0-201-83595-3',
          title: 'The Mythical Man-Month',
          author: 'Frederick P. Brooks Jr.',
          genre: 'Software Engineering',
          year: 1995,
          quantity: 9,
        },
      ],
      [
        '978-0-596-00016-1',
        {
          ISBN: '978-0-596-00016-1',
          title: 'Head First Design Patterns',
          author: 'Eric Freeman',
          genre: 'Design Patterns',
          year: 2004,
          quantity: 6,
        },
      ],
      [
        '978-0-13-235088-4',
        {
          ISBN: '978-0-13-235088-4',
          title: 'Clean Architecture',
          author: 'Robert C. Martin',
          genre: 'Software Architecture',
          year: 2017,
          quantity: 5,
        },
      ],
      [
        '978-1-59327-584-6',
        {
          ISBN: '978-1-59327-584-6',
          title: 'Eloquent JavaScript',
          author: 'Marijn Haverbeke',
          genre: 'Programming',
          year: 2018,
          quantity: 12,
        },
      ],
      [
        '978-0-321-87758-1',
        {
          ISBN: '978-0-321-87758-1',
          title: 'Refactoring: Improving the Design of Existing Code',
          author: 'Martin Fowler',
          genre: 'Software Development',
          year: 2018,
          quantity: 7,
        },
      ],
      [
        '978-1-491-91254-5',
        {
          ISBN: '978-1-491-91254-5',
          title: 'Python for Data Analysis',
          author: 'Wes McKinney',
          genre: 'Data Science',
          year: 2017,
          quantity: 4,
        },
      ],
      [
        '978-0-596-15759-8',
        {
          ISBN: '978-0-596-15759-8',
          title: 'Programming Rust',
          author: 'Jim Blandy',
          genre: 'Programming',
          year: 2017,
          quantity: 6,
        },
      ],
      [
        '978-1-59327-424-5',
        {
          ISBN: '978-1-59327-424-5',
          title: 'Python Crash Course',
          author: 'Eric Matthes',
          genre: 'Programming',
          year: 2015,
          quantity: 15,
        },
      ],
      [
        '978-0-134-49800-8',
        {
          ISBN: '978-0-134-49800-8',
          title: 'Introduction to the Theory of Computation',
          author: 'Michael Sipser',
          genre: 'Theoretical Computer Science',
          year: 2012,
          quantity: 5,
        },
      ],
      [
        '978-1-118-06333-0',
        {
          ISBN: '978-1-118-06333-0',
          title: 'Introduction to Probability',
          author: 'Dimitri P. Bertsekas',
          genre: 'Mathematics',
          year: 2015,
          quantity: 3,
        },
      ],
      [
        '978-0-321-83428-4',
        {
          ISBN: '978-0-321-83428-4',
          title: 'The Pragmatic Programmer',
          author: 'Andrew Hunt',
          genre: 'Software Development',
          year: 1999,
          quantity: 11,
        },
      ],
      [
        '978-1-491-97219-8',
        {
          ISBN: '978-1-491-97219-8',
          title: 'Fluent Python',
          author: 'Luciano Ramalho',
          genre: 'Programming',
          year: 2015,
          quantity: 4,
        },
      ]
]);

const filePath = path.join(__dirname, 'libraryData.json');

const saveLibraryData = () => {
    fs.writeFileSync(filePath, JSON.stringify(Array.from(libraryData.entries()), null, 2));
};

saveLibraryData();
*/