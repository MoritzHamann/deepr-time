Deepr = Ember.Application.create();
Deepr.ApplicationAdapter = DS.FixtureAdapter;

Deepr.Project = DS.Model.extend({
    name: DS.attr('string'),
    url: DS.attr('string'),
    imageurl: DS.attr('string'),
    timebudget: DS.attr(),
    timelogs: DS.hasMany('timelog')
});

Deepr.Person = DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    imageurl: DS.attr('string'),
    timelogs: DS.hasMany('timelog')
});

Deepr.Timelog = DS.Model.extend({
    date: DS.attr('date'),
    comment: DS.attr('string'),
    hours: DS.attr()
});

// Fixture data
Deepr.Project.FIXTURES= [
    {id: 1, name: "Yaez", url: "www.yaez.de", imageurl: "www.yaez.de/logo.png", timebudget: 50, timelogs: [] },
    {id: 2, name: "Carbowheel", url: "www.carbowheel.de", imageurl: "www.carbowheel.de/logo.png", timebudget: 50, timelogs: [] },
    {id: 3, name: "Transferre", url: "www.transferre.de", imageurl: "www.transferre.de/logo.png", timebudget: 35, timelogs: [] },
    {id: 4, name: "Montagetools", url: "www.transferre.de", imageurl: "www.transferre.de/logo.png", timebudget: 35, timelogs: [] },
    {id: 5, name: "cc-bs", url: "www.transferre.de", imageurl: "www.transferre.de/logo.png", timebudget: 35, timelogs: [] },
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
