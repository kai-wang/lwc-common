sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-recipes
sfdx force:source:push
sfdx force:user:permset:assign -n recipes
sfdx force:data:tree:import -p ./data/data-plan.json
