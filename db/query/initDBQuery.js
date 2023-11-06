const createTableQuery= {
    user:'CREATE TABLE IF NOT EXISTS user(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'uid VARCHAR(20)   NOT NULL,' +
        'pw VARCHAR(30)   NOT NULL,' +
        'email VARCHAR(50),' +
        'phone VARCHAR(20),' +
        'blog VARCHAR(100),' +
        'git VARCHAR(100),' +
        'intro TEXT' +
        ');',

    skill:'CREATE TABLE IF NOT EXISTS skill(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(20) NOT NULL,' +
        'degree INT NOT NULL' +
        ');',

    interests:'CREATE TABLE IF NOT EXISTS interests(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(20) NOT NULL' +
        ');',

    experience:'CREATE TABLE IF NOT EXISTS experience(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'type VARCHAR(20) NOT NULL,' +
        'name VARCHAR(20) NOT NULL,' +
        'location VARCHAR(20) NOT NULL,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ');',

    expContent:'CREATE TABLE IF NOT EXISTS expcontent(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'expId INT NOT NULL,' +
        'content TEXT NOT NULL,' +
        'FOREIGN KEY(expId) REFERENCES experience(id)' +
        ');',

    education:'CREATE TABLE IF NOT EXISTS education(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'major VARCHAR(50) NOT NULL,' +
        'type INT NOT NULL,' +
        'degree VARCHAR(20),' +
        'school VARCHAR(50) NOT NULL,' +
        'GPA DOUBLE,' +
        'relatedSubject TEXT,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ');',

    certificate: 'CREATE TABLE IF NOT EXISTS certificate(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(20) NOT NULL,' +
        'organization VARCHAR(20) NOT NULL,' +
        'acqDate DATE NOT NULL' +
        ');',

    project:'CREATE TABLE IF NOT EXISTS project(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(50),' +
        'stack TEXT,' +
        'content TEXT,' +
        'contribution INT,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ');',

    extracurriculum:'CREATE TABLE IF NOT EXISTS extracurriculum(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'name VARCHAR(50) NOT NULL,' +
        'content TEXT,' +
        'contribution INT,' +
        'startDate DATE NOT NULL,' +
        'endDate DATE' +
        ');',


}

const insertInitDataQuery = {
    user: 'INSERT INTO user(uid,pw,email,phone,blog,git,intro) \n' +
        'VALUES (\'admin\',\'1234\',\'example@gmail.com\',\'010-1234-5678\',' +
        '\'https://minit-devlog.tistory.com/\',\'https://github.com/egogit?tab=repositories\',' +
        '\'안녕하세요. Hymin의 CV페이지입니다.\');',
    skill: 'INSERT INTO skill(name, degree)' +
        'VALUES (\'English\', 3), (\'Nodejs\', 2), (\'Reactjs\',1);',
    interests: 'INSERT INTO interests(name)' +
        'VALUES (\'Applied Math\'), (\'NLP\'), (\'Computer Vision\'), (\'Financial IT\')',
    experience: 'INSERT INTO experience(name, type, location, startDate, endDate)' +
        'VALUES (\'Backend Developer\',\'Intern\',\'Gymmon\',\'2021-05-07\',\'2021-09-27\');',
    expContent: 'INSERT INTO expContent(expId, content)\n' +
        'VALUES (1, \'자사 건강식품 쇼핑몰 Backend 서비스 개발(nodejs)을 담당했으나 회사 내부 사정으로 실제로 서비스까지 이어지지 못했습니다.\');',
    education: 'INSERT INTO education(major, type, degree, school, GPA, relatedSubject, startDate)' +
        'VALUES (\'컴퓨터공학과\', 0 , \'학사\', \'가천대학교\', 4.40, \'웹프로그래밍, 고급웹프로그래밍, 웹DB프로그래밍, 서버프로그래밍, etc\',\'2018-03-01\'),' +
        '(\'금융수학과\', 1 , \'학사\', \'가천대학교\', 4.5, \'선형대수, 고급미적분학, 미분방정식, 확률론, 통계학, 수치해석학, etc\',\'2018-03-01\');',
    certificate: 'INSERT INTO certificate(name, organization, acqDate)' +
        'VALUES(\'SQLD\',\'한국데이터산업진흥원\',\'2022-04-08\'),' +
        '          (\'정보처리기사\',\'한국산업인력공단\',\'2023-09-01\');',
    project: 'INSERT INTO project(name, stack, content, contribution, startDate, endDate)' +
        'VALUES (\'Running Crew 모집앱\',\'Java\',\'러닝 크루를 모집 및 운동용품 매매 중개 플랫폼\',100,\'2018-12-21\',\'2018-11-22\'),' +
        '           (\'주식 매매 프로그램\', \'python\', \'코로나 이전과 이후 각 시기에 대한 모의 주식 매매 프로그램\', 100, \'2022-04-01\', \'2022-04-30\')',
    extracurriculum:'INSERT INTO extracurriculum(name, content, startDate, endDate)' +
        'VALUES (\'Payload/SUA 동아리\',\'웹/시스템/모바일 해킹 및 보안 기술 스터디\',\'2018-03-01\',\'2019-03-01\'),' +
        '(\'CodeIn 동아리\',\'코딩테스트 대비 스터디\',\'2021-09-01\',\'2019-12-01\');'
}

module.exports =  [createTableQuery, insertInitDataQuery];