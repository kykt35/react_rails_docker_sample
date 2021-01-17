FROM ruby:2.7.2
ENV LANG C.UTF-8

RUN apt-get update -y && \
    apt-get install default-mysql-client nodejs npm -y && \
    gem install rails --version='6.0.1' && \
    npm uninstall yarn -g && \
    npm install yarn -g -y


WORKDIR /app
COPY Gemfile /app/
COPY Gemfile.lock /app/

COPY . /app

RUN bundle install -j4

EXPOSE 3000

CMD bundle exec rails s puma -b 0.0.0.0 -p 3000 -e ${RAILS_ENV}
