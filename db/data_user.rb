module DATA_DEF
xzyz='your group name'
PWD='password'
ADMIN='Admin'
OWNER='Owner'
DEVELOPER='Developer'
EDITOR='Editor'
USER='User'
DATA_USER={
role:[
    {name: 'Owner', description: 'Owner'},      
    {name: 'Admin', description:'Admin'}, 
    {name: 'Dev',   description:'Dev'}, 
    {name: 'Developer', description:'Developer'},    
    {name: 'Editor', description:'Editor'}, 
    {name: 'Reader', description:'Reader'},
    {name: 'User',   description:'User'}
  ],    
group:[  
    {name: 'Web Master', description: 'Web Admin'}, #1
    {name: xzyz, description: xzyz},    
    {name: '8104班', description: xzyz,pid:2}, 
    {name: '8105班', description: xzyz,pid:2}, 
    {name: '8106班', description: xzyz,pid:2},
  ],  
user:[ # gid=group_id rid=role_id
    {wname:'admin', email:'admin@gmail.com',password:PWD,gid:1,rid:1},
    {wname:'guest',email:'guest@gmail.com',password:PWD,
        gid:1,rid:6},
    {wname:'admin1',email:'admin1@gmail.com',password:PWD,gid:1,rid:1},
    {wname:'admin2',email:'admin2@gmail.com',password:PWD,gid:1,rid:1},
    {wname:'admin3',email:'admin3@gmail.com',password:PWD,gid:1,rid:1},
    {wname:'admin4',email:'admin4@gmail.com',password:PWD,gid:1,rid:1},
    {wname:'admin5',email:'admin5@gmail.com',password:PWD,gid:1,rid:1},
    {wname:'admin6',email:'admin6@gmail.com',password:PWD,gid:1,rid:1},

  ]
}
end