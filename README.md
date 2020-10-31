# WIRED Website

This is the repository for the WIRED website hosted at https://wired.org.au. The website is built using [Jekyll](https://jekyllrb.com/) and hosted on Github Pages.

## Setup for local development

1. Install Ruby (consider using [rbenv](https://github.com/rbenv/rbenv) instead of system Ruby)
2. Install Bundler: `gem install bundler`
3. Use Bundler to install project dependencies: `bundle install`
4. Start local Jekyll server: `bundle exec jekyll serve`

The default server address is `http://127.0.0.1:4000`. If this port is already taken the server will fail to start; either kill the process using that port, or start Jekyll using a different port: `bundle exec jekyll serve --port [PORT]`

## Development tips

- All internal links should be filtered using `relative_url` to deal with deployments that are not hosted at the domain root:

```html
<!-- WRONG -->
<a href="/contact">Contact</a>

<!-- RIGHT: Note that the value is now quoted -->
<a href="{{ '/contact' | relative_url }}">Contact</a>
```

### Styles

- Stylesheets are written in SASS and use the `.scss` extension. Styles common across pages are put in the `_sass` folder and imported in `assets/css/styles.scss`. Page-specific styles are put in `assets/css` and must have front matter at the top (the two lines of `---`) to be processed by Jekyll.

Media queries use the `sass-mq` mixin at <https://github.com/sass-mq/sass-mq>. See this for tips on writing media queries.

### Adding new pages

- All pages that you want an entry in the navbar for must have an `order` field in the front matter: this field determines what
  order the navbar entries appear in (lower order values at left, higher order values at right). Only pages with order values >= 1
  will be shown.
- Use `layout: default` unless you have a good reason not to.
- You can write pages in Markdown by using the `.md` extension: this will be parsed to HTML using [Kramdown](https://kramdown.gettalong.org/). You can include HTML directly in your Markdown files for elements that you don't want to convert to Markdown.
  - By default, you cannot write Markdown inside HTML tags in your `.md` files. (TODO: add details on using markdownify)
- Add layouts in the `_layouts` folder (see `default.html` and `home.html` for details). Any layout you add that extends directly from `base.html` must include `footer.html`.

### Working with Turbolinks

This site uses Turbolinks to provide a seamless internal navigation experience. Because Turbolinks never refreshes the page after every link click, any code that uses vanilla DOM page load events (e.g. `window.onload`, `DOMContentLoaded`) will only run on the initial load into the website. As such, if you need to run code on every navigation you need to add an event listener for the `turbolinks:load` event. (See <https://github.com/turbolinks/turbolinks#installing-javascript-behavior> for more details.)

## Site hosting configuration

The `CNAME` file contains the custom domain that the Github Pages site will be served from (in our case, wired.org.au). It should not be deleted.

TODO: can this be replaced with the _Custom domain_ setting under _Github Pages_?

## Github Pages configuration

Under the repository's _Settings_ page, go to the _Github Pages_ section.
Select a branch to publish from and the _'/ (root)'_ folder option.

To create a non-production Github Pages deployment for dev and testing:

1. Fork the repository (Github Pages only allows deploying from one branch in a repo)
2. Create a branch specifically for the new deployment.
3. Make TWO changes specific to this branch:
   1. Delete `CNAME` (otherwise Github Pages will prevent you from deploying, as the original wired-admin repo is already using that custom domain).
   2. In `_config.yml`, change:
      1. `baseurl` = the name of the forked repo. This is needed because Github Pages doesn't host sites at the domain root, but instead at the subpath `/[repo-name]`: if left empty, all your internal site links will 404 because they're pointing to `/[site-page]` instead of `/[repo-name]/[site-page]`.
      2. (Optional?) `github-username` = your Github username. (Don't think this matters, haven't tested)
      3. (Optional) `url` = your Github Pages domain, i.e. `[username].github.io`. (Not needed for a working deployment, might be a useful variable later?)
4. Do your dev work on separate branches to the deployed branch. This will make it much easier to merge work upstream, as you won't need to deal with the commit(s) above.
   1. NOTE: Testing with Jekyll locally CANNOT be done on the deployed branch, as the changed `baseurl` will cause issues.
5. Merge changes into the deployed branch to test them before merging upstream. NEVER merge the other way around (otherwise you'll have to deal with the test deployment-specific commits).
