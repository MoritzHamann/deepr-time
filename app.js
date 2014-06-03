Deepr = Ember.Application.create();
Deepr.ApplicationAdapter = DS.FixtureAdapter;

Deepr.Project = DS.Model.extend({
    name: DS.attr('string'),
    url: DS.attr('string'),
    imageurl: DS.attr('string'),
    timebudget: DS.attr('number'),
    timelogs: DS.hasMany('timelog', {async: true}),
    status: DS.attr('string'),
    
    total: function(){
	
    }.property('timebudget', 'timelogs')
});

Deepr.Person = DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    imageurl: DS.attr('string'),
    timelogs: DS.hasMany('timelog', {async: true})
});

Deepr.Timelog = DS.Model.extend({
    date: DS.attr('date'),
    comment: DS.attr('string'),
    hours: DS.attr('number')
});

// Fixture data
Deepr.Project.FIXTURES= [
    {id: 1, name: "Yaez", url: "www.yaez.de", imageurl: "www.yaez.de/logo.png", timebudget: 50, timelogs: [1,2,3], status: 'open' },
    {id: 2, name: "Carbowheel", url: "www.carbowheel.de", imageurl: "www.carbowheel.de/logo.png", timebudget: 50, timelogs: [4,5,6], status: 'open' },
    {id: 3, name: "Transferre", url: "www.transferre.de", imageurl: "www.transferre.de/logo.png", timebudget: 35, timelogs: [7], status: 'closed' },
    {id: 4, name: "Montagetools", url: "www.transferre.de", imageurl: "www.transferre.de/logo.png", timebudget: 35, timelogs: [], status: 'closed' },
    {id: 5, name: "cc-bs", url: "www.transferre.de", imageurl: "www.transferre.de/logo.png", timebudget: 35, timelogs: [], status: 'open' },
]

Deepr.Timelog.FIXTURES = [
    {id: 1, comment: "Super gemacht", hours: 3},
    {id: 2, comment: "Super toll gemacht", hours: 4},
    {id: 3, comment: "Nicht ganz fertig", hours: 5},
    {id: 4, comment: "Blubb", hours: 2.5},
    {id: 5, comment: "Ninjas rockens mal wieder", hours: 1},
    {id: 6, comment: "Pirates ftw", hours: 3.5},
    {id: 7, comment: "AO", hours: 2}
]

Deepr.Router.map(function (){
    this.resource('projects', {path: 'projekte'}, function(){
	this.resource('ProjectDetail', {path: '/:project_id'});
    });
    this.route('timelog', {path: 'buchen'});
});

Deepr.ProjectDetailRoute = Ember.Route.extend({
    model: function(params){
	return "asdf";
    }
});

Deepr.ProjectsIndexRoute = Ember.Route.extend({
    model: function(){
	return this.store.find('project');
    }
});

Deepr.ProjectsIndexController = Ember.ArrayController.extend({
    filtering: function (){
	that = this;
	return this.filter(function(item, index, enumobj){
	    return item.get('name').toLowerCase().match(that.get('filtertext'));
	});
    }.property('filtertext')
});
