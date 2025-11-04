from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models
from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        ironman = User.objects.create_user(username='ironman', email='ironman@marvel.com', password='hero123', team=marvel)
        captain = User.objects.create_user(username='captain', email='captain@marvel.com', password='hero123', team=marvel)
        batman = User.objects.create_user(username='batman', email='batman@dc.com', password='hero123', team=dc)
        superman = User.objects.create_user(username='superman', email='superman@dc.com', password='hero123', team=dc)

        # Create activities
        Activity.objects.create(user=ironman, type='run', duration=30)
        Activity.objects.create(user=captain, type='cycle', duration=45)
        Activity.objects.create(user=batman, type='swim', duration=60)
        Activity.objects.create(user=superman, type='run', duration=50)

        # Create workouts
        Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes', team=marvel)
        Workout.objects.create(name='Strength Training', description='Strength for DC heroes', team=dc)

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=75)
        Leaderboard.objects.create(team=dc, points=110)

        self.stdout.write(self.style.SUCCESS('Database populated with test data.'))
