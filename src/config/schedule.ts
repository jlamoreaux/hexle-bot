import schedule from "node-schedule";

const startScheduledTask = (task: VoidFunction): schedule.Job => {
  const rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = [new schedule.Range(0, 6)];
  rule.hour = 8;
  rule.minute = 1;
  rule.tz = "EST";

  return schedule.scheduleJob(rule, task);
}

export default startScheduledTask;