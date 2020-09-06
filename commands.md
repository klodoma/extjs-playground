
```shell script
webpack-dev-server  --env.app=app1 --env.profile=desktop --env.environment=development
webpack-dev-server  --env.app=app2 --env.profile=desktop --env.environment=development

webpack-dev-server  --env.app=appw1 --env.profile=desktop --env.environment=development
webpack-dev-server  --env.app=appw2 --env.profile=desktop --env.environment=development 
webpack-dev-server  --env.app=appw1 --env.profile=desktop --env.environment=development  --info-verbosity verbose
webpack-dev-server  --env.app=appw1 --env.profile=desktop --env.environment=development --watch --progress --info-verbosity verbose
```

Sencha Ant Useful Commands:
```
.\node_modules\.bin\sencha ant .props
.\node_modules\.bin\sencha app watch --debug --web-server false classic development
```
