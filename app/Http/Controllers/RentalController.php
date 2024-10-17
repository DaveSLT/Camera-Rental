namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rental;

class RentalController extends Controller
{
public function index()
{
$rentals = Rental::all();
return response()->json($rentals);
}

public function store(Request $request)
{
$rental = new Rental();
$rental->camera = $request->camera;
$rental->renter = $request->renter;
$rental->rental_date = $request->rental_date;
$rental->return_date = $request->return_date;
$rental->save();

return response()->json(['message' => 'Rental added successfully']);
}
}