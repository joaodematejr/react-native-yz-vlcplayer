require 'json'
package_json = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name           = "react-native-yz-vlcplayer"
  s.version        = package_json["version"]
  s.summary        = package_json["description"]
  s.homepage       = "https://github.com/joaodematejr/react-native-yz-vlcplayer"
  s.license        = package_json["license"]
  s.author         = { package_json["author"] => package_json["author"] }
  s.platform       = :ios, "10.0"
  s.source         = { :git => "https://github.com/joaodematejr/react-native-yz-vlcplayer.git" } 
  s.source_files   = 'ios/RCTVLCPlayer/*.{h,m}'

  s.dependency 'React'

end