const createTableQuery= {
    user:'CREATE TABLE user(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'uid VARCHAR(20)   NOT NULL,' +
        'pw VARCHAR(30)   NOT NULL,' +
        'email VARCHAR(50),' +
        'phone VARCHAR(20),' +
        'blog VARCHAR(100),' +
        'git VARCHAR(100),' +
        'intro TEXT' +
        ')',

    skill:'CREATE TABLE skill(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'activity   VARCHAR(20) NOT NULL,' +
        'grade INT CHECK (grade IN (1,2,3,4,5))' +
        ')',

    experience:'CREATE TABLE experience(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(20) NOT NULL,' +
        'location VARCHAR(20) NOT NULL,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ')',

    expContent:'CREATE TABLE expcontent(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'expId INT NOT NULL,' +
        'content TEXT NOT NULL,' +
        'FOREIGN KEY(expId) REFERENCES experience(id)' +
        ')',

    education:'CREATE TABLE education(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'major VARCHAR(50),' +
        'degree VARCHAR(20),' +
        'school VARCHAR(50) NOT NULL,' +
        'GPA DOUBLE,' +
        'relatedSubject TEXT,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ')',

    project:'CREATE TABLE project(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(50),' +
        'stack TEXT,' +
        'content TEXT,' +
        'contribution INT,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ')',

    extracurriculum:'CREATE TABLE extracurriculum(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(50) NOT NULL,' +
        'content TEXT,' +
        'contribution INT,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ')',
}

const insertInitDataQuery = {

}

export default createTableQuery;