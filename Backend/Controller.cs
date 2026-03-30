public class Controller
{
    private readonly DatabaseContext _context;

    public Controller(DatabaseContext context)
    {
        _context = context;
    }
}