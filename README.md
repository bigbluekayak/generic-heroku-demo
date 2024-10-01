# Generic Heroku Demo

Use this demo to show how easy and quick it is to deploy apps using Heroku

Clone this repo
```
git clone [repo]
```

Using the CLI create a Heroku app
```
heroku create generic-heroku-demo
```

Make a simple change to the index.html file.

Check the change in locally
```
git add .
git commit -m "Changed"
```

Then deploy to Heroku
```
git push heroku master
```

Then open the app and show the change you made
```
heroku open
```

Reset the demo and destory the app
```
heroku destroy -a generic-heroku-demo -c generic-heroku-demo
```