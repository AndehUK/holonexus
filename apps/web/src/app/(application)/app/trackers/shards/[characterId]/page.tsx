type Props = {
  params: { characterId: string };
};

const ShardTrackerPage = ({ params }: Props) => {
  return <div>{params.characterId}</div>;
};

export default ShardTrackerPage;
