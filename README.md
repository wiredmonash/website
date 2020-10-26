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
- Current breakpoints used for media queries:
  - 480px
  - 768px

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

