// questions js 
let questions = [
    {
      numb: 1,
      question: "What is the smallest possible sum when take 500 unique odd num?",
      answer: "250000",
      options: [
        "500",
        "1000",
        "250000",   // (500/2)*1000
        "500000"
      ]  
  },
    {
    numb: 2,
    question: "In the forest there is an ancient temple, at its gate there is a lock containing 4 digits, in each slot there is a letter of the Arabic letters. At worst, how many passwords will you try?",
    answer: "614656",
    options: [
      "614656",
      "456976",
      "645922",
      "414628"
    ]
  },
    {
    numb: 3,
    question: "How many numbers less than or equal to 1000, and greater than 0, are divisible by 5 or 7?",
    answer: "314",
    options: [
      "28",
      "201",
      "30",
      "314"
    ]
  },
    {
    numb: 4,
    question: "if we reverse the digit of and we get the same number we call that is palindrome number like 4747474 how many number with 14 digit called Palindrom?",
    answer: "9000000",
    options: [
      "7529536",
      "9000000",    // return (9 * pow(10, (n - 1) / 2));  first element any dig from 1-9 and final 6 any of 0-9 and it's same for backward :)
      "30002510",
      "1000000000"
    ]
  },
    {
    numb: 5,
    question: "Your age is 16 If your brother is half your age, how old he will be when you are 120 years old?",
    answer: "112",
    options: [
      "80",
      "112",
      "60",
      "110"
    ]
  },]