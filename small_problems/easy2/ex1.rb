puts "Give me a name and I can predict their age:"
name = gets.chomp
name = "Teddy" if name == ''

puts "#{name} is #{rand(20..200)} years old!"
