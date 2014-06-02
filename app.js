deepr = Ember.Application.create();
deepr.ApplicationAdapter = DS.FixtureAdapter;

deepr.Project = DS.Model.extend({
    name: DS.attr('string'),
    url: DS.attr('string'),
    imageurl: DS.attr('string'),
    timebudget: DS.attr(),
    timelogs: DS.hasMany('timelog')
});

deepr.person = DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    imageurl: DS.attr('string'),
    timelogs: DS.hasMany('timelog')
});

deepr.timelog = DS.Model.extend({
    date: DS.attr('date'),
    comment: DS.attr('string'),
    hours: DS.attr()
});


deepr.Router.map(function (){
    this.resource('projects', {path: 'projekte'}, function(){
	this.resource('detail', {path: '/:project_id'});
    });
    this.route('timelog', {path: 'buchen'});
});

deepr.DetailRoute = Ember.Route.extend({
    model: function(params){
	return "asdf";
    }
});

deepr.ProjectsIndexController = Ember.ArrayController.extend({
    model: function (){
	return [{a: 1}];
    },
    filtering: function (){
	return this.get('filtertext');
    }.property('filtertext')
});
