#! /bin/sh
package_name=$1
package_dir=packages/$package_name
package_json_file=$package_dir/package.json

success_color="\033[0;32m"
info_color="\033[0;34m"
error_color="\033[0;31m"
reset_color="\033[0m"

if [[ $# -eq 0 ]] ; then
    echo -e "${error_color}Package name as argument is required but not found."
    exit 0
fi
if [ -d "$package_dir" ]; then
  # Take action if $DIR exists. #
  echo -e "${error_color}This package already exists."
  exit 0
fi

cp -r packages/box $package_dir

node > /tmp/file.json.t <<EOF
//Read data
var data = require('./${package_json_file}');

//Manipulate data
data.name = "@stinodes-ui/${package_name}"

//Output data
console.log(JSON.stringify(data, null, 2));
EOF

mv /tmp/file.json.t $package_json_file

rm $package_dir/src/index.ts
rm -rf $package_dir/lib

touch $package_dir/src/index.ts

function replace_in_file() {
  local file=$1
  while read a; do
    echo ${a//box/$package_name}
  done < $file > /tmp/file.txt.t
  mv /tmp/file.txt.t $file
}

replace_in_file "$package_dir/README.md"

echo -e "${success_color}Package \"$package_name\" has been created."
echo -e "You can find it at $package_dir."
echo -e "${info_color}Happy coding!${reset_color}"