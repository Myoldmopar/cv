#!/bin/bash
# Run this from the project root to stand up a docker hosted site at http://localhost:4000/cv/
docker run --rm -v "$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve

