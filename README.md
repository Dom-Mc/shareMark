# shareMark

Sharemark is a community driven application where users have the ability to share a wide variety of learning resources and to participate through voting. The application was built with Rails 5 , Angular 1.5, and styled with Semantic-UI.

## Installation
#### (Step 1) Clone a local copy of the `shareMark` repo.
`$ git clone https://github.com/YOUR-USERNAME/shareMark.git`

#### (Step 2) Run Bundler to install gem dependencies:
```
$ cd shareMark/
$ bundle install
```

#### (Step 3) Run Bower to install angular modules (packages):
```
$ cd shareMark/
rake bower:install
```

#### (Step 4) Migrate the database:
`$ bin/rails db:migrate`

#### (Step 5) Populate the database with seed data:
`$ bin/rails db:seed`

## Future Todo Items
- Add user authentication
- Ability to stream videos via youtube's api

## Creator

Dom McKellar
* http://newme.io/
* https://github.com/Dom-Mc

## License

shareMark is an open-sourced software licensed under the MIT license.

## Contributing
Fork it
Create your feature branch: `git checkout -b my-new-feature`
Commit your changes: `git commit -am 'Add some feature'`
Push to the branch: `git push origin my-new-feature`
Create new Pull Request
