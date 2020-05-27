const db = require("../database/db.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Course = require("../models/Course")

process.env.SECRET_KEY = 'secret'

//Funcion para crear un curso
exports.create = (req, res) => {

	const courseData = {
        id : req.id,
		subject_id: req.body.subject_id,
		anio: req.body.anio,
		semestre: req.body.semestre,
	}

    Course.findOne({
        where : {
            id : req.id
        }
    }).then(course =>{
        if(!course){
			Course.create(courseData)
			.then(course => {
				res.json({status: 'registered'})
			})
			.catch(err => {
				res.send('error' + err)
			})
        }else{
            res.json({error:"El curso ya existe"})
        }
    }).catch(err=>{
        res.send('error: '+err)
    })
}

//Funcion para borrar curso, recibiendo como parametro el ID
exports.delete = (req, res) => {
	Course.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(course => {
		if(course){
			Course.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(course => {
				res.json({status: req.params.id + ' eliminado'})
			})
			.catch(course => {
				res.json({error: "No se puede eliminar el curso."})
			})
		}else{
			res.status(400).json({error: 'El curso no existe'})
			res.end()
		}
	})
	.catch(err => {
		res.status(400).json({error: err})
	})
}

//Funcion para actualizar una tupla de curso recibiendo como parámetro su ID para identificarla
exports.update = (req, res)=>{
    Course.findOne({
        where : {
            id: req.params.id
        }
    }).then(course=>{
        if(course){
           Course.update({
               anio : req.body.anio,
               semestre : req.body.semestre
           },{
               where: {
                   id : req.params.id
               }
           }).then(result =>{
               res.json({status : course.id + "tupla actualizada "})
           }).catch(err=>{
               res.json({error:req.params.id+" no se puede actualizar error "+err})
           })
        }else{
            res.json({erro:"No se encuntra el ID: "+req.id})
        }
    }).catch(err=>{
        res.status(400).json({error:"No se encuentra ID: "+req.params.id+" "+ err})
    })
}

//Funcion que retorna todos los cursos registrados
exports.readAll = (req, res) => {
	Course.findAll({})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.status(500).send({
			message:
				err.message || "Error"
		})
	})
}