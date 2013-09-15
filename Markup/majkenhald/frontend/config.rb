# Require any additional compass plugins here.
# Set this to the root of your project when deployed:
http_path = "/"
http_prefix = http_path + "frontend/"

css_dir = "css/dist"
http_stylesheets_path = http_prefix + css_dir

sass_dir = "css/src"

images_dir = "images"
http_images_path = http_prefix + images_dir

generated_images_dir = images_dir
http_generated_images_path = http_prefix + generated_images_dir

fonts_dir = "fonts"
http_fonts_path = http_prefix + fonts_dir

javascripts_dir = "js/src"
http_javascripts_path = http_prefix + javascripts_dir

environment = :development
output_style = :nested
line_comments = false
preferred_syntax = :scss
sass_options = {:unix_newlines => true}
#
# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true