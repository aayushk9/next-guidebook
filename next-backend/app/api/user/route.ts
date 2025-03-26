 

// in nexr.js 
 export function GET() {
    return Response.json({
        email: "ayush@gmail.com",
        password: "admff"
    })
 }

export function POST() {
    return Response.json({
        msg: "Hello from post request"
    })
}

 // in express 

 //app.get("/api/user", (req, res) => {
   // return res.json({
     //   email,
       // password
   // })

 //})