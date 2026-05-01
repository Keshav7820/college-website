function calculateGrade(marks) {
    if (marks >= 90) return "O (Outstanding)";
    else if (marks >= 80) return "A+ (Excellent)";
    else if (marks >= 70) return "A (Very Good)";
    else if (marks < 40) return "F (Fail - Critical)";
    else return "B";
}