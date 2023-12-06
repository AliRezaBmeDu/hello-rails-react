Message.destroy_all

welcome_messages = [
  "Welcome!",
  "We're excited to have you here!",
  "Hello!",
  "Greetings!",
  "Glad to have you!"
]

# Create messages in the database
welcome_messages.each do |content|
  Message.create(content: content)
end

puts "Seeding complete! Created #{welcome_messages.size} welcome messages."
