import Appointments from "../infra/typeorm/entities/Appointment";

interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointments | undefined>;
}

export default IAppointmentsRepository;
