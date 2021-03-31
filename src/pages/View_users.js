import React, { useState, useEffect } from "react";
import view from "./styles/view.module.css";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let users = [
  {
    name: "FB user",
    age: 18,
    weight: 68,
    gender: "male",
    level: "beginner",
    goals: "weight loss",
    target: "78",
    goal_time: 2,
    height: 187,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 19,
    gender: "female",
    level: "intermediate",
    goals: "weight gain",
    target: "81",
    goal_time: 1,
    weight: 78,
    height: 187,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 53,
    gender: "male",
    level: "Expert",
    goals: "Muscle build",
    target: "73",
    goal_time: 6,
    weight: 48,
    height: 178,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 18,
    gender: "male",
    level: "beginner",
    goals: "weight loss",
    target: "78",
    goal_time: 2,
    weight: 43,
    height: 167,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 11,
    gender: "female",
    level: "intermediate",
    goals: "weight gain",
    target: "81",
    goal_time: 1,
    weight: 55,
    height: 167,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 16,
    gender: "male",
    level: "Expert",
    goals: "Muscle build",
    target: "73",
    goal_time: 6,
    weight: 54,
    height: 176,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 19,
    gender: "male",
    level: "beginner",
    goals: "weight loss",
    target: "78",
    goal_time: 2,
    weight: 54,
    height: 165,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 12,
    gender: "female",
    level: "intermediate",
    goals: "weight gain",
    target: "81",
    goal_time: 1,
    weight: 40,
    height: 156,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 16,
    gender: "male",
    level: "Expert",
    goals: "Muscle build",
    target: "73",
    goal_time: 6,
    weight: 45,
    height: 156,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 40,
    gender: "male",
    level: "beginner",
    goals: "weight loss",
    target: "78",
    goal_time: 2,
    weight: 49,
    height: 154,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 48,
    gender: "female",
    level: "intermediate",
    goals: "weight gain",
    target: "81",
    goal_time: 1,
    weight: 51,
    height: 123,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 38,
    gender: "male",
    level: "Expert",
    goals: "Muscle build",
    target: "73",
    goal_time: 6,
    weight: 52,
    height: 145,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 24,
    gender: "male",
    level: "beginner",
    goals: "weight loss",
    target: "78",
    goal_time: 2,
    weight: 44,
    height: 150,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 12,
    gender: "female",
    level: "intermediate",
    goals: "weight gain",
    target: "81",
    goal_time: 1,
    weight: 68,
    height: 160,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 21,
    gender: "male",
    level: "Expert",
    goals: "Muscle build",
    target: "73",
    goal_time: 6,
    weight: 88,
    height: 171,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
  {
    name: "FB user",
    age: 43,
    gender: "male",
    level: "beginner",
    goals: "weight loss",
    target: "78",
    goal_time: 2,
    weight: 64,
    height: 172,
    fitness_packs: 0,
    yoga_packs: 0,
    aerobics_packs: 2,
  },
];

export default function View_users(event) {
  const [allUsers, setAllUsers] = useState(users);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [ageLimit, setageLimit] = useState({ start: null, end: null });
  const [weightLimit, setWeightLimit] = useState({ start: null, end: null });
  const [heightLimit, setHeightLimit] = useState({ start: null, end: null });
  const [fitnessLimit, setFitnessLimit] = useState({ start: null, end: null });
  const [yogaLimit, setYogaLimit] = useState({ start: null, end: null });
  const [aerobicsLimit, setAerobicsLimit] = useState({
    start: null,
    end: null,
  });
  const [targetLimit, setTargetLimit] = useState({ start: null, end: null });
  const [goalTimeLimit, setGoalTimeLimit] = useState({
    start: null,
    end: null,
  });
  // const [heightLimit, setHeightLimit] = useState({ start: null, end: null });
  // const [heightLimit, setHeightLimit] = useState({ start: null, end: null });
  // const [heightLimit, setHeightLimit] = useState({ start: null, end: null });

  // age-filter
  useEffect(() => {
    let ageStart = ageLimit.start || 0;
    let ageEnd = ageLimit.end || 1000;
    const result = allUsers.filter(
      (user) => user.age >= ageStart && user.age <= ageEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [ageLimit]);
  const OnAgeStartChange = (event) => {
    setageLimit({
      start: event.target.value,
      end: ageLimit.end,
    });
  };
  const onEndtChange = (event) => {
    setageLimit({
      start: ageLimit.start,
      end: event.target.value,
    });
  };

  // weight-filter
  useEffect(() => {
    let weightStart = weightLimit.start || 0;
    let weightEnd = weightLimit.end || 1000;
    const result = allUsers.filter(
      (user) => user.weight >= weightStart && user.weight <= weightEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [weightLimit]);
  const OnWStartChange = (event) => {
    setWeightLimit({
      start: event.target.value,
      end: weightLimit.end,
    });
  };
  const onWEndtChange = (event) => {
    setWeightLimit({
      start: weightLimit.start,
      end: event.target.value,
    });
  };

  // height-filter
  useEffect(() => {
    let heightStart = heightLimit.start || 0;
    let heightEnd = heightLimit.end || 1000;
    const result = allUsers.filter(
      (user) => user.height >= heightStart && user.height <= heightEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [heightLimit]);
  const OnHStartChange = (event) => {
    setHeightLimit({
      start: event.target.value,
      end: heightLimit.end,
    });
  };
  const onHEndtChange = (event) => {
    setHeightLimit({
      start: heightLimit.start,
      end: event.target.value,
    });
  };

  // fitness-filter
  useEffect(() => {
    let fitnessStart = fitnessLimit.start || 0;
    let fitnessEnd = fitnessLimit.end || 1000;
    const result = allUsers.filter(
      (user) =>
        user.fitness_packs >= fitnessStart && user.fitness_packs <= fitnessEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [fitnessLimit]);
  const OnFStartChange = (event) => {
    setFitnessLimit({
      start: event.target.value,
      end: fitnessLimit.end,
    });
  };
  const onFEndtChange = (event) => {
    setFitnessLimit({
      start: fitnessLimit.start,
      end: event.target.value,
    });
  };

  // yoga-filter
  useEffect(() => {
    let yogaStart = yogaLimit.start || 0;
    let yogaEnd = yogaLimit.end || 1000;
    const result = allUsers.filter(
      (user) => user.yoga_packs >= yogaStart && user.yoga_packs <= yogaEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [yogaLimit]);
  const OnYStartChange = (event) => {
    setYogaLimit({
      start: event.target.value,
      end: yogaLimit.end,
    });
  };
  const onYEndtChange = (event) => {
    setYogaLimit({
      start: yogaLimit.start,
      end: event.target.value,
    });
  };

  // aerobics-filter
  useEffect(() => {
    let aerobicsStart = aerobicsLimit.start || 0;
    let aerobicsEnd = aerobicsLimit.end || 1000;
    const result = allUsers.filter(
      (user) =>
        user.aerobics_packs >= aerobicsStart &&
        user.aerobics_packs <= aerobicsEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [aerobicsLimit]);
  const OnAStartChange = (event) => {
    setAerobicsLimit({
      start: event.target.value,
      end: aerobicsLimit.end,
    });
  };
  const onAEndtChange = (event) => {
    setAerobicsLimit({
      start: aerobicsLimit.start,
      end: event.target.value,
    });
  };

  // target-weight-filter
  useEffect(() => {
    let targetStart = targetLimit.start || 0;
    let targetEnd = targetLimit.end || 1000;
    const result = allUsers.filter(
      (user) => user.target >= targetStart && user.target <= targetEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [targetLimit]);
  const OnTStartChange = (event) => {
    setTargetLimit({
      start: event.target.value,
      end: targetLimit.end,
    });
  };
  const onTEndtChange = (event) => {
    setTargetLimit({
      start: targetLimit.start,
      end: event.target.value,
    });
  };

  // goal-time-filter
  useEffect(() => {
    let goalTimeStart = goalTimeLimit.start || 0;
    let goalTimeEnd = goalTimeLimit.end || 1000;
    const result = allUsers.filter(
      (user) => user.goal_time >= goalTimeStart && user.goal_time <= goalTimeEnd
    );
    setAllUsers(result);
    setFilteredUsers(result);
  }, [goalTimeLimit]);
  const OnGStartChange = (event) => {
    setGoalTimeLimit({
      start: event.target.value,
      end: goalTimeLimit.end,
    });
  };
  const onGEndtChange = (event) => {
    setGoalTimeLimit({
      start: goalTimeLimit.start,
      end: event.target.value,
    });
  };

  //drop-down-filters
  const onGenderChange = (event) => {
    const s_gender = event.target.value;
    const result = allUsers.filter((user) => user.gender == s_gender);
    setAllUsers(result);
    setFilteredUsers(result);
  };
  const onGoalChange = (event) => {
    const s_goal = event.target.value;
    const result = allUsers.filter((user) => user.goals == s_goal);
    setAllUsers(result);
    setFilteredUsers(result);
  };
  const onLevelChange = (event) => {
    const s_level = event.target.value;
    const result = allUsers.filter((user) => user.level == s_level);
    setAllUsers(result);
    setFilteredUsers(result);
  };
  // export to excel code (is required only when 3 lines of code inside <ExcelSheet> component is uncommented)
  // const camelCase = (str) => {
  //   return str.substring(0, 1).toUpperCase() + str.substring(1);
  // };

  // const filterColumns = (filteredUsers) => {
  //   const columns = Object.keys(filteredUsers[0]);
  //   return columns;
  // };

  return (
    <div className={view.main}>
      <div className={view.controls}>
        <ExcelFile filename="fitbuddy-data">
          <ExcelSheet data={filteredUsers} name="Users">
            {/* the code commented below was not working so I decided to go with manual way */}
            {/* {filterColumns(filteredUsers).map((col) => {
              return <ExcelColumn label={camelCase(col)} value={col} />;
            })} */}
            <ExcelColumn label="Name" value="name" />
            <ExcelColumn label="Age" value="age" />
            <ExcelColumn label="Weight(in kg)" value="weight" />
            <ExcelColumn label="Height(in cm)" value="height" />
            <ExcelColumn label="Fitness packs" value="fitness_packs" />
            <ExcelColumn label="Yoga packs" value="yoga_packs" />
            <ExcelColumn label="Aerobics packs" value="aerobics_packs" />
            <ExcelColumn label="Gender" value="gender" />
            <ExcelColumn label="Level" value="level" />
            <ExcelColumn label="Goals" value="goals" />
            <ExcelColumn label="Target weight(kg)" value="target" />
            <ExcelColumn label="Goal_time(months)" value="goal_time" />
          </ExcelSheet>
        </ExcelFile>
        <select onChange={onGenderChange}>
          <option value="null">gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select onChange={onLevelChange}>
          <option value="null">level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <select onChange={onGoalChange}>
          <option value="null">goal</option>
          <option value="weight loss">Weight loss</option>
          <option value="weight gain">Weight gain</option>
          <option value="Muscle build">Muscle build</option>
        </select>
        <div className={view.reload} onClick={() => window.location.reload()}>
          clear filters
        </div>
      </div>
      <div className={view.controls_2}>
        <div className={view.filter_ctr}>
          filter by age:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnAgeStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onEndtChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className={view.filter_ctr}>
          filter by weight:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnWStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onWEndtChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className={view.filter_ctr}>
          filter by height:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnHStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onHEndtChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className={view.filter_ctr}>
          filter by fitness:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnFStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onFEndtChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className={view.filter_ctr}>
          filter by yoga:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnYStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onYEndtChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className={view.filter_ctr}>
          filter by aerobics:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnAStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onAEndtChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className={view.filter_ctr}>
          filter by target weight:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnTStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onTEndtChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className={view.filter_ctr}>
          filter by goal time:
          <div>
            <input
              className={view.starting}
              placeholder="min"
              onChange={OnGStartChange}
              type="number"
            ></input>
            <input
              className={view.ending}
              placeholder="max"
              onChange={onGEndtChange}
              type="number"
            ></input>
          </div>
        </div>
      </div>
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>weight(kg)</th>
          <th>height(cms)</th>
          <th>fitness packs</th>
          <th>yoga packs</th>
          <th>aerobics packs</th>
          <th>gender</th>
          <th>level</th>
          <th>goals</th>
          <th>target weight(kg)</th>
          <th>goal_time(months)</th>
        </tr>
        {filteredUsers.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.weight}</td>
              <td>{user.height}</td>
              <td>{user.fitness_packs}</td>
              <td>{user.yoga_packs}</td>
              <td>{user.aerobics_packs}</td>
              <td>{user.gender}</td>
              <td>{user.level}</td>
              <td>{user.goals}</td>
              <td>{user.target}</td>
              <td>{user.goal_time}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
// const [ageSort, setAgeSort] = useState(null);
// const [weightSort, setWeightSort] = useState(null);
// const [heightSort, setHeightSort] = useState(null);

// const sortByAge = () => {
//   if (ageSort === null || false) {
//     users.sort((a, b) => (a.age > b.age ? 1 : -1));
//     setAgeSort(true);
//   } else {
//     users.sort((a, b) => (a.age < b.age ? 1 : -1));
//     setAgeSort(false);
//   }
// };
// const sortByWeight = () => {
//   users.sort((a, b) => (a.weight > b.weight ? 1 : -1));
//   setWeightSort(weightSort === null ? true : !weightSort);
// };
// const sortByHeight = () => {
//   users.sort((a, b) => (a.height > b.height ? 1 : -1));
//   setHeightSort(heightSort === null ? true : !heightSort);
// };

/* <button onClick={() => sortByAge()}>sort by age</button>
        <button onClick={() => sortByWeight()}>sort by weight</button>
        <button onClick={() => sortByHeight()}>sort by height</button> */
