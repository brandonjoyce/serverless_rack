#!./traveling_ruby_linux_86_64/bin/ruby

require 'json'

# You can use this to check your Ruby version from within puts(RUBY_VERSION)

if ARGV.length > 0
    puts JSON.parse( ARGV[0] ).length
else
    puts "0"
end
