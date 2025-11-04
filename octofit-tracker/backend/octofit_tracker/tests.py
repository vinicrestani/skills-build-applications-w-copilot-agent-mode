from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        self.ironman = User.objects.create_user(username='ironman', email='ironman@marvel.com', password='hero123', team=marvel)
        self.batman = User.objects.create_user(username='batman', email='batman@dc.com', password='hero123', team=dc)
        Activity.objects.create(user=self.ironman, type='run', duration=30)
        Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes', team=marvel)
        Leaderboard.objects.create(team=marvel, points=75)

    def test_user_team(self):
        self.assertEqual(self.ironman.team.name, 'Marvel')
        self.assertEqual(self.batman.team.name, 'DC')

    def test_activity(self):
        activity = Activity.objects.get(user=self.ironman)
        self.assertEqual(activity.type, 'run')
        self.assertEqual(activity.duration, 30)

    def test_workout(self):
        workout = Workout.objects.get(team__name='Marvel')
        self.assertEqual(workout.name, 'Morning Cardio')

    def test_leaderboard(self):
        leaderboard = Leaderboard.objects.get(team__name='Marvel')
        self.assertEqual(leaderboard.points, 75)
