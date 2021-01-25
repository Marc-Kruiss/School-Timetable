package service;

import DbRepository.DbRepository;
import org.acme.Lesson;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.text.ParseException;
import java.util.List;

@ApplicationScoped
@Path("/planer")
public class PlanerService {

    @Inject
    DbRepository repo;

    @Path("init")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String init(){
        try {
            repo.init();
            return "successfully initialized";
        } catch (ParseException e) {
            return "failed initialization";
        }
    }

    @Path("findAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Lesson> findAll(){
        return repo.findAll();
    }

    @Path("find/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Lesson find(@PathParam("id") long id){
        return repo.find(id);
    }

    @Path("delete/{id}")
    @DELETE
    //@Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") long id){
        repo.delete(id);
    }

    @Path("update")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Lesson updateLesson(Lesson lesson){
        return repo.update(lesson);
    }

    @Path("create")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Lesson createLesson(Lesson lesson){
        return repo.create(lesson);
    }


}
