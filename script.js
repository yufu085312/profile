$(document).ready(function() {
    var profile = {
        name: 'あなたの名前',
        bio: 'あなたの経歴',
        skills: ['HTML', 'CSS', 'JavaScript']
    };

    $('#name').text(profile.name);
    $('#bio').text(profile.bio);

    var skillsList = $('#skills');
    profile.skills.forEach(function(skill) {
        skillsList.append('<li>' + skill + '</li>');
    });
});